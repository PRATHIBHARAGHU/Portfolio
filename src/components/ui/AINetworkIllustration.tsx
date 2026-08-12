// import Lottie from "lottie-react";
// import aiNetworkAnimation from "@/assets/lottie/ai-network.json";


// export function AINetworkIllustration({
//   className,
// }: AINetworkIllustrationProps) {
//   return (
//     <div className={cn("relative aspect-square w-full", className)}>
//       <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_65%)] opacity-20 blur-2xl" />
//       <Lottie
//         animationData={aiNetworkAnimation}
//         loop
//         autoplay
//         className="relative h-full w-full"
//         aria-label="Animated illustration of a connected AI neural network"
//         role="img"
//       />
//     </div>
//   );
// }


import avatar from "@/assets/images/avatar.png";
import { cn } from "@/utils/cn";

interface AINetworkIllustrationProps {
  className?: string;
}

export function AINetworkIllustration({
  className,
}: AINetworkIllustrationProps) {
  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_65%)] opacity-20 blur-2xl" />

        <div className="relative flex h-full items-center justify-center "  >

        <img
          src={avatar}
          alt="Professional developer illustration"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}