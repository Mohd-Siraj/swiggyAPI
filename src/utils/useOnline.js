import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)



useEffect(() => {

const getOnline = () => {
 setIsOnline(true);
}
const getOffline = () => {
 setIsOnline(false);
}

    window.addEventListener("online", getOnline);
    window.addEventListener("offline", getOffline);


}, [])
return isOnline;
}

export default useOnline;