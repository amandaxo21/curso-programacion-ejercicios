import { useState, useEffect } from "react"


export const Header = () => {
    const [darkmode, setDarkMode] = useState(false)
    const handleClick = () =>{
        setDarkMode(!darkmode)

    }
    useEffect(()=>{
        if(darkmode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkmode])
    return (
        <header className="bg-Very-Pale-Blue(Top-BG-Pattern) dark:bg-Very-Dark-Blue-(BG) h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px]">
            <h1 className="text-Very-Dark-Blue-(Text) dark:text-Very-Pale-Blue(Top-BG-Pattern) text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue-(Text) font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />
            <div className="flex place-content-between">
                <p className="text-Dark-Grayish-Blue-(Text) dark:text-Desaturated-Blue
                font-bold">Dark mode</p>
                <label htmlFor="darkmode" className="border relative bg-Toggle peer-checked:bg-Toggle-Gradient w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px] ">
                <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only" />
                <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0">                   
                </div>
                <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue-(Card-BG) rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label> 
            </div>
        </header>
    )
}