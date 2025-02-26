import ReactPlayer from "react-player"
import { useAppSelector } from "../../store/hooks"

const Video = () => {
    const { modules, currentLesson, currentModule } = useAppSelector(state => state.player)

    const id = modules[currentModule].lessons[currentLesson].id

    return (
        <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={`https://www.youtube.com/watch?v=${id}`}
                />
            </div>
        </div>
    )
}

export default Video