import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { useAppDispatch } from "@/store/hooks";
import { hydrateFromLocalStorage } from "@/store/editorSlice";
import { useEffect } from "react";

const EditorContent = dynamic(() => import('@/components/editor/EditorContent'), {
    ssr: false
});

export default function Editor() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(hydrateFromLocalStorage());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Wedding Website Editor</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Provider store={store}>
                <EditorContent />
            </Provider>
        </>
    );
}