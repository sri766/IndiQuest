import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1, }} className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        
        className="h-[35rem] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 2"
        className="h-[35rem] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 3"
        className="h-[35rem] w-full object-cover"
      />
    </Carousel>
  );
}