import ReactPlayer from "react-player"
import { useAppDispatch, useCurrentLesson } from "../../store/hooks"
import { next } from "../../store/slices/player"

const Video = () => {
    const dispatch = useAppDispatch()
    const { currentLesson } = useCurrentLesson()

    if (!currentLesson) return null
    return (
        <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={currentLesson && `https://www.youtube.com/watch?v=${currentLesson.id}`}
                    onEnded={() => dispatch(next())}
                />
            </div>
        </div>
    )
}

export default Video