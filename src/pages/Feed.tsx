import { PostComposer } from "../components/feed/PostComposer"
import { PostScrollList } from "../components/feed/PostScrollList"
import { MainLayout } from "../layouts/MainLayout"

export const Feed = () => {
    return(
        <MainLayout>
            <PostComposer/>
            <PostScrollList/>
        </MainLayout>
    )
} 