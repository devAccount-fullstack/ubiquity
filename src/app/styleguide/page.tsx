import Button from "@components/common/Button";
import Card from "@components/common/Cards/Card";
import SiteHeader from "@components/layout/SiteHeader";

export default async function Page() {
  return (
    <>
      <SiteHeader />
      <div className="bg-mosswood text-white mb-14">
        <div className="section mx-auto w-full max-w-6xl px-7 pt-14 pb-14 lg:pt-38 lg:pb-38">
          <h1 className="font-serif text-6xl text-balance md:text-7xl lg:text-8xl">
            Styleguide
          </h1>
          <p className="mt-7">
            This is a styleguide for Ubiquity UI components and styles.
          </p>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-7 pb-14 md:grid-cols-12 lg:pb-38">
        <div className="md:col-span-7" id="Typography">
          <h1 className="mb-7 font-serif capitalize text-6xl text-balance md:text-7xl lg:text-8xl">
            H1 Lorem Ipsum Dolor Consect
          </h1>
          <h2 className="mb-7 font-serif text-5xl md:text-6xl lg:text-7xl">
            H2 Lorem Ipsum Dolor Consect
          </h2>
          <h3 className="mb-7 font-serif text-3xl md:text-5xl">
            H3 Serif Lorem Ipsum Dolor Consect
          </h3>
          <h3 className="mb-7 text-lg font-semibold md:text-2xl">
            H3 Sans-serif Lorem Ipsum Dolor Consect
          </h3>
          <p>
            Lorem fusce orci enim scelerisque phasellus congue nibh at quam
            venenatis vel gravida elit enim aliquet hac duis habitasse vitae
            posuere etiam consequat. <strong>Adipiscing</strong> eli mattis sit
            phasellus mollis sit aliquam sit{" "}
            <em>lorem ipsum dolor consecture</em> amet{" "}
            <a href="#" className="text-blaze hover:underline">
              lorem ipsum dolor.
            </a>
          </p>
          <ul className="marker:text-blaze mt-5 list-inside list-disc">
            <li>Unordered list item 1</li>
            <li>Unordered list item 2</li>
            <li>Unordered list item 3</li>
          </ul>
          <div className="my-7 flex flex-wrap gap-6" id="Colors">
            <div className="bg-blaze flex h-30 w-30 items-center justify-center rounded-3xl">
              blaze
            </div>
            <div className="bg-obsidian flex h-30 w-30 items-center justify-center rounded-3xl text-white">
              obsidian
            </div>
            <div className="bg-mosswood flex h-30 w-30 items-center justify-center rounded-3xl text-white">
              mosswood
            </div>
            <div className="bg-dune flex h-30 w-30 items-center justify-center rounded-3xl">
              dune
            </div>
            <div className="bg-linen flex h-30 w-30 items-center justify-center rounded-3xl border">
              linen
            </div>
            <div className="bg-mist flex h-30 w-30 items-center justify-center rounded-3xl">
              mist
            </div>
            <div className="bg-claret flex h-30 w-30 items-center justify-center rounded-3xl text-white">
              claret
            </div>
            <div className="bg-tundra flex h-30 w-30 items-center justify-center rounded-3xl text-white">
              tundra
            </div>
          </div>
          <Card className="my-7" id="Cards">
            <p>
              Lorem fusce orci enim scelerisque phasellus congue nibh at quam
              venenatis vel gravida elit enim aliquet hac duis habitasse vitae
              posuere etiam consequat. <strong>Adipiscing</strong> eli mattis
              sit phasellus mollis sit aliquam sit{" "}
              <em>lorem ipsum dolor consecture</em> amet{" "}
              <a href="#" className="text-blaze hover:underline">
                lorem ipsum dolor.
              </a>
            </p>
          </Card>
          <Card large className="my-7">
            <h3 className="text-lg font-semibold md:text-2xl">
              H3 Sans-serif Lorem Ipsum Dolor Consect
            </h3>
            <p>
              Lorem fusce orci enim scelerisque phasellus congue nibh at quam
              venenatis vel gravida elit enim aliquet hac duis habitasse vitae
              posuere etiam consequat. <strong>Adipiscing</strong> eli mattis
              sit phasellus mollis sit aliquam sit{" "}
              <em>lorem ipsum dolor consecture</em> amet lorem ipsum dolor.
            </p>
          </Card>
          <div className="flex flex-wrap gap-4" id="Buttons">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="link" withArrow>
              Link Button
            </Button>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-start-9">
          <ul className="marker:text-blaze sticky top-10 list-inside list-disc space-y-2">
            <li>
              <a href="#Typography" className="text-blaze hover:underline">
                Typography
              </a>
            </li>
            <li>
              <a href="#Colors" className="text-blaze hover:underline">
                Colors
              </a>
            </li>
            <li>
              <a href="#Cards" className="text-blaze hover:underline">
                Cards
              </a>
            </li>
            <li>
              <a href="#Buttons" className="text-blaze hover:underline">
                Buttons
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
