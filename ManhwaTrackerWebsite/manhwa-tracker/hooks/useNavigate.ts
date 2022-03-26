import { useRouter } from "next/router";

export function useNavigate() {
    const router = useRouter();

    return function (
        e: React.MouseEvent<HTMLElement>,
        path: string,
        asPath: string
    ) {
        e.preventDefault();
        router.push(path, asPath);
    };
}
