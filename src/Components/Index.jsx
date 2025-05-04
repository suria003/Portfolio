import React,  { Suspense } from 'react';
import Loading from "./Load/Loading";

export default function Index() {

    const HomeComponent = React.lazy(() => import('./Pages/Home'));
    const SocialMediaComponent = React.lazy(() => import('./Toggle/SocialMedia'));

    return (
        <main className="h-screen w-full bg-transprent flex justify-center items-center overflow-hidden">
            <Suspense fallback={<div className='h-auto w-auto bg-transparent'><Loading /></div>}>
                <HomeComponent />
                <SocialMediaComponent />
            </Suspense>
        </main>
    );
}