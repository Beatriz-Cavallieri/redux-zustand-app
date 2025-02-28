import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector, useCurrentLesson } from "../../store/hooks"
import { next } from "../../store/slices/player"
import { Loader } from "lucide-react"

const Video = () => {
    const isCourseLoading = useAppSelector(state => state.player.isLoading)
    const { currentLesson } = useCurrentLesson()
    const dispatch = useAppDispatch()

    if (!currentLesson) return null
    return (
        <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
                {isCourseLoading ? (
                    <div className="flex h-full items-center justify-center">
                        <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
                    </div>
                ) : <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={currentLesson && `https://www.youtube.com/watch?v=${currentLesson.id}`}
                    onEnded={() => dispatch(next())}
                />}
            </div>
        </div>
    )
}

export default Video