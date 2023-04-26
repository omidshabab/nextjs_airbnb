import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row justify-between gap-3 item-center md:gap-0">
                        <Logo />
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;