import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";
import { twMerge } from "tailwind-merge";
import { RichTextProps } from "./types";

function RichText(props: RichTextProps) {
  if (!props.content) return null;
  const { content, className = "", noWrapper, prose = true, ...rest } = props;

  if (content.trim() === "<p><br></p>") {
    return null;
  }

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode &&
        domNode.type === "tag" &&
        "name" in domNode &&
        domNode.name === "p"
      ) {
        return <>{domToReact(domNode.children as DOMNode[], options)}</>;
      }
      return null;
    },
  };

  if (noWrapper) {
    return parse(content, options);
  }
  return (
    <div className={twMerge(prose ? "prose" : "", className)} {...rest}>
      {parse(content)}
    </div>
  );
}
export default RichText;
