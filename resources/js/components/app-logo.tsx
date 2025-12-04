export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-white">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" 
                    alt="Honda Logo" 
                    className="size-6"
                />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold text-sidebar-foreground">
                    PT. Menara Agung
                </span>
            </div>
        </>
    );
}
