import React, { Suspense } from 'react';
import Loading from './../common/Loading/Loading';

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loading />}><Component {...props}/></React.Suspense>
    }
}