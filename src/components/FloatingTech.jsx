import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

export default function FloatingTech() {
  return (
    <div className="relative w-[350px] h-[350px] flex items-center justify-center">
      <div className="absolute animate-float1 text-cyan-400 text-5xl">
        <FaReact />
      </div>

      <div className="absolute animate-float2 text-green-400 text-5xl">
        <FaNodeJs />
      </div>

      <div className="absolute animate-float3 text-yellow-400 text-5xl">
        <SiMongodb />
      </div>

      <div className="absolute animate-float4 text-gray-200 text-5xl">
        <FaGithub />
      </div>

      <div className="absolute animate-float5 text-purple-400 text-5xl">
        <SiTypescript />
      </div>

      <div className="absolute animate-float6 text-gray-300 text-5xl">
        <SiExpress />
      </div>
    </div>
  );
}
