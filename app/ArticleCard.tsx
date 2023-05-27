export default function ArticleCard() {
    return (
        <div className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6">
            <div className="w-full md:w-7/12">
                <img className="w-full h-64 md:h-full object-cover" src="https://source.unsplash.com/random" alt="Random Unsplash img"/>
            </div>
            <div className="w-full md:w-5/12 p-4">
                <h2 className="font-bold text-2xl mb-2">Title</h2>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,
                    aliquet sit amet elementum eu, vehicula eget massa. Donec metus mauris,
                    aliquam id dolor id, blandit condimentum magna.
                </p>
            </div>
        </div>
    )
}