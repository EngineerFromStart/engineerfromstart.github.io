import React from 'react'
import Header from "../components/header"
import Main from "../components/main"
import { PageProps, useStaticQuery, graphql } from "gatsby"
import queryString, { ParsedQuery } from 'query-string';

export default class Layout extends React.Component {

    location: WindowLocation<LocationState>;
    static USE_BLOGGER: string = 'useBlogger';
    static ENG_FROM_START: string = 'Engineer From Start';
    static DATA: Map<String, String>;
    static BLOGGERS: Map<String, String> = new Map<string, string>();
    blogger: string | String;

    constructor(props) {
        super(props)

        Layout.getSiteTitlesData(props);
        this.location = props.pageProps.location;

        this.blogger = this.getBlogger(this.location.search);
        console.log("Using blogger: " + this.blogger);
    }

    static getSiteTitlesData(props) {
        console.log(props);
        if (!Layout.DATA) {
            console.log(props);
            props.titles.site.siteMetadata.titles.map((item) => {
                Layout.BLOGGERS.set(item.id, item.title)
            })
        }
    }

    getQueryParams(paramName: string, query: string): string | string[] | null {
        const parsedQuery: ParsedQuery = queryString.parse(query);
        let parsedParam: string | string[] = parsedQuery[paramName];
        if (!Array.isArray(parsedParam)) {
            parsedParam = [parsedParam];
        }
        return parsedParam;
    }

    getQueryParam(paramName: string, query: string): string | null {
        return this.getQueryParams(paramName, query)[0];
    }

    getBlogger(query: string) {
        let parsedSearch: string = this.getQueryParam(Layout.USE_BLOGGER, query);
        if (parsedSearch && (Layout.BLOGGERS.has(parsedSearch))) {
            return Layout.BLOGGERS.get(parsedSearch);
        }
        return Layout.ENG_FROM_START;
    }

    render() {
        return [
            <div>
                <Header headerText={this.blogger} />
                <div style={{ color: `purple` }} className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Main contentType="home"></Main>
                </div>
            </div>
        ]
    }
}