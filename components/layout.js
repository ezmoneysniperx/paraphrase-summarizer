import Link from 'next/link';

export default function Layout({ children }) {
    const menuItems = [
        {
            href: '/',
            title: 'Paraphraser',
        },
        {
            href: '/summarize',
            title: 'Summarizer',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <header
                className="bg-gray-100 border border-gray-300 top-0 h-14 pl-3 flex items-center justify-center font-raleway font-bold text-primary text-3xl"
            >
                <span className="text-secondary">Paraphraser </span> Summarizer<span className="text-secondary">App </span>

            </header>
            <div className="flex flex-col md:flex-row flex-1">
                <aside className='bg-gray-100 w-60'>
                    <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link href={href}>
                                        <a
                                            className={`flex mx-2 p-2 bg-secondary font-raleway font-bold rounded hover:bg-primary hover:text-secondary cursor-pointer`}
                                        >
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}