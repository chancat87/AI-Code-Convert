import React, {FC} from 'react';
import Head from "next/head";

interface BaseHeadMetaProps {
    meta: {
        title: string;
        description: string;
        canonical: string;
    }
}

export const BaseHeadMeta: React.FC<BaseHeadMetaProps> = (props) => {
    return (
        <div>
            <Head>
                <title>{props.meta.title}</title>
                <meta name="description" content={props.meta.description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={props.meta.title + ",free,online"} />
                <link rel="canonical" href={props.meta.canonical} />
                <link rel="icon" href="/code.png" />
            </Head>
        </div>
    );
};