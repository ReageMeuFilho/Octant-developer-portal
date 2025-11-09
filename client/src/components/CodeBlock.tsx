import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ 
  code, 
  language = "typescript", 
  filename,
  showLineNumbers = false 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="relative group my-6">
      {/* Header with filename and copy button */}
      {(filename || true) && (
        <div className="flex items-center justify-between bg-muted/50 border border-border rounded-t-lg px-4 py-2">
          {filename && (
            <span className="text-xs font-mono text-muted-foreground">
              {filename}
            </span>
          )}
          <Button
            size="sm"
            variant="ghost"
            className={`ml-auto h-7 px-2 text-xs ${!filename ? 'ml-0' : ''}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
      )}
      
      {/* Code content */}
      <div className={`bg-card border border-border ${filename || true ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto`}>
        <pre className="p-4 text-sm">
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index}>
                      <td className="pr-4 text-right text-muted-foreground select-none w-12 border-r border-border/50">
                        {index + 1}
                      </td>
                      <td className="pl-4">
                        {line || '\n'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

