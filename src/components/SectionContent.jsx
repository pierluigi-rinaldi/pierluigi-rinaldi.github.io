export default function SectionContent({ section }) {
  if (section === "about") {
    return (
      <div className="flex justify-between p-8 text-white">
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>Your biography goes here. You can describe your research, background, and goals.</p>
        </div>
        <div className="w-1/3 text-center">
          <img src="/profile.jpg" className="rounded-full w-40 h-40 mx-auto mb-4" />
          <div className="text-sm">
            <p>University of Somewhere</p>
            <p>City, Country</p>
            <p>Email: your.email@domain.com</p>
          </div>
        </div>
      </div>
    );
  } else if (section === "publications") {
    return (
      <div className="p-8 text-white space-y-4">
        <h2 className="text-2xl font-bold mb-2">First Author Publications</h2>
        <ul className="list-disc list-inside">
          <li>Example First Author Paper, ApJ, 2025</li>
        </ul>
        <a href="https://ui.adsabs.harvard.edu/user/libraries/" className="underline text-blue-400">
          See all publications on NASA ADS
        </a>
      </div>
    );
  } else if (section === "cv") {
    return (
      <div className="p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">CV</h2>
        <p>Add your CV information here.</p>
      </div>
    );
  } else {
    return null;
  }
}
