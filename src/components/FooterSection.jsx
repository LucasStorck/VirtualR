import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function FooterSection() {
  return (
    <footer className="container mx-auto mt-10 px-3 border-t py-10 border-neutral-200">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-700" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-700" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-700" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="flex justify-center">©VirtualR. All Rights Reserved.</h3>
      </div>
    </footer>
  );
}

export default FooterSection;
