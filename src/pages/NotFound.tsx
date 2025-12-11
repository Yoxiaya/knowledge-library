import img404 from '@/assets/picture/4.png'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <img src={img404} alt="404" />
            <div className="text-center m-8">
                <h2 className="text-3xl font-bold text-[#FF7CACEE]">小笨蛋，页面跑偏啦～</h2>
            </div>
            <div className="text-center mb-8">
                <p className="text-sm text-[#666666]">你可以选择刷新页面或者返回主页</p>
            </div>
            <div
                onClick={() => navigate('/')}
                className="w-[120px] h-[40px] flex items-center justify-center bg-[#FF7CACEE] text-white rounded-md cursor-pointer"
            >
                返回
            </div>
        </div>
    )
}
