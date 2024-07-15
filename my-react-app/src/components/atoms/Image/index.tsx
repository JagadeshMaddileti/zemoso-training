
interface Imageprops{
    src:string,
    alt:string,
    className?:string,
}
const Image=({src,alt,className}:Imageprops)=>{
    return(
            <img src={src} alt={alt} className={className}/>
        );
}
export default Image;