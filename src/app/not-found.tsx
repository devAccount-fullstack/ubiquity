import Image from "next/image";
import Button from "@components/common/Button";

import logo from "@/assets/img/ubiquity-logo-black.svg?url";
import pupper from "@/assets/img/404-pupper.png";

export default function NotFound() {
    return (
        <section
            className="not-found text-black flex flex-col items-center justify-center h-screen max-h-[800px] relative"
        >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center pt-5">
                <Image
                    src={logo}
                    alt="Ubiquity Logo"
                    width={140}
                />
            </div>
            <Image
                src={pupper}
                alt="Page not found"
                width={500}
                height={500}
                className="w-1/2 max-w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="z-1 flex flex-col justify-center items-center h-full px-5">
                <div className="flex justify-between w-full max-w-md pb-20">
                    <p>Error 404</p>
                    <p>Error 404</p>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-center capitalize">
                    Page not found
                </h1>
            </div>
            <div className="z-1 pb-10">
                <Button
                    variant="primary"
                    asLink
                    href="/"
                >
                    Back Home
                </Button>
            </div>
        </section>
    )
}