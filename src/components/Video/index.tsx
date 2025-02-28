import ReactPlayer from "react-player"
import { useAppSelector } from "../../store/hooks"
import { useDispatch } from "react-redux"
import { next } from "../../store/slices/player"

const Video = () => {
    const { course, currentLessonIndex, currentModuleIndex } = useAppSelector(state => state.player)
    const dispatch = useDispatch()

    const id = course?.modules[currentModuleIndex].lessons[currentLessonIndex].id

    return (
        <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={`https://www.youtube.com/watch?v=${id}`}
                    onEnded={() => dispatch(next())}
                />
            </div>
        </div>
    )
}

export default Video