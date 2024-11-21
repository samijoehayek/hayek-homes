import ContactInfoNavbar from "./contact-info-navbar";
import SocialIcons from "./social-media";
import HomeButton from "./buttons/home";
import SignInButton from "./buttons/sign-in";
import SignUpButton from "./buttons/sign-up";
import MainMenu from "./main-menu";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col items-center">
      {/* Container for both rows - 80% width */}
      <div className="w-4/5">
        {/* First Row */}
        <div className="w-full py-4 pt-8 flex justify-between items-center">
          <ContactInfoNavbar />
          <SocialIcons />
        </div>

        {/* Divider Line - 75% width */}
        <div className="flex justify-center">
          <div className="w-full h-[1px] bg-gray-200" />
        </div>

        {/* Second Row */}
        <div className="w-full py-4 flex items-center justify-between space-x-8">
          <HomeButton />
          <MainMenu />
          <div>
            <SignInButton />
            <SignUpButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
