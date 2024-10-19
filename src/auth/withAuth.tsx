"use client"
import { JSX, useEffect} from 'react';
import { useRouter } from 'next/navigation';

export default function withAuth<P>(Component: any) {
    return function ProtectedRoute(props: JSX.IntrinsicAttributes) {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/');
            }
        }, [router]);

        return <Component {...props} />;
    };
}
