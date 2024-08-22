import content from '../../constans/content'
import Components from '../../Components'

export default function HomePage(): JSX.Element {
    return (
        <div className={`flex flex-1 flex-col`}>
            <Components.TopBar title={content.topBar} />
            <main className={`flex flex-grow bg-white flex-col`}>
                <Components.ProductSection />
            </main>
            <Components.Footer />
        </div>
    )
}
