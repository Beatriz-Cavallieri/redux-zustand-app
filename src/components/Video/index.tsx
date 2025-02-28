import ReactPlayer from "react-player"
import { useCurrentLesson } from "../../store/hooks"
import { useDispatch } from "react-redux"
import { next } from "../../store/slices/player"

const Video = () => {
    const dispatch = useDispatch()
    const { currentLesson } = useCurrentLesson()

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