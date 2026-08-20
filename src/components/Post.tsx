import Link from "next/link";


export function Post() {
    return <article className="flex flex-col items-center justify-center min-h-43 max-w-355 shadow-lg">
        <div className="top__side flex flex-row items-center">
            <Link href="/" className="post__author">@author</Link>
            <h1 className="post__title">
                Post title
            </h1>
        </div>
        <div className="bottom__side">
            <div className="post__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </div>
        </div>
    </article>
}