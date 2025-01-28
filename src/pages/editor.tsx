import dynamic from 'next/dynamic';
import Head from 'next/head';

const EditorContent = dynamic(() => import('@/components/editor/EditorContent'), {
    ssr: false
});

export default function Editor() {
    return (
        <>
            <Head>
                <title>Wedding Website Editor</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <EditorContent />
        </>
    );
}