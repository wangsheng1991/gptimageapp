import { useState } from 'react';
import { Upload, ImageIcon, Wand2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { generateImage } from '@/lib/fal';

export default function Generator() {
  const [activeTab, setActiveTab] = useState<'text' | 'edit'>('text');
  const [prompt, setPrompt] = useState('A serene Japanese temple at sunset with cherry blossoms, traditional architecture, soft orange and pink sky, peaceful atmosphere, cinematic photography');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal(0.1);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const images = await generateImage(prompt);
      if (images.length > 0) {
        setGeneratedImage(images[0].url);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="generator" aria-label="AI Image Generator" className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">GPT Image 2 AI Image Generator</h3>
            <span className="text-xs text-gray-600">Generated Result</span>
          </div>

          <div className="grid lg:grid-cols-5 min-h-[500px]">
            {/* Left Panel - Controls */}
            <div className="lg:col-span-2 p-6 border-r border-white/5 space-y-5">
              {/* Tab Switcher */}
              <div className="flex bg-white/5 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('text')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === 'text'
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <Wand2 className="w-4 h-4" />
                  Text to Image
                </button>
                <button
                  onClick={() => setActiveTab('edit')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === 'edit'
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  Image Edit
                </button>
              </div>

              {/* Model */}
              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-medium">Model</label>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
                  <span>GPT Image 2</span>
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              {/* Reference Image */}
              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-medium">Upload Reference Image</label>
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-colors cursor-pointer">
                    <img src="/assets/resolution_ratio.jpg" alt="Reference image of woman with headphones for background replacement demo" className="w-full h-full object-cover" />
                  </div>
                  <button className="w-16 h-16 rounded-lg border border-dashed border-white/20 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/5 transition-all cursor-pointer" aria-label="Upload reference image">
                    <Upload className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Prompt */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs text-gray-500 font-medium">Prompt</label>
                  <span className="text-xs text-gray-600">{prompt.length}/3500</span>
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                  placeholder="Describe the image you want to generate..."
                  aria-label="Image generation prompt"
                />
              </div>

              {/* Settings */}
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500">Size</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white cursor-pointer hover:border-white/20 transition-colors">
                    2048×2048
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500">Quality</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white cursor-pointer hover:border-white/20 transition-colors">
                    Ultra HD
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500">Ratio</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white cursor-pointer hover:border-white/20 transition-colors">
                    1:1
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>

            {/* Right Panel - Result */}
            <div className="lg:col-span-3 p-6 flex flex-col">
              <figure className="flex-1 bg-black rounded-xl overflow-hidden border border-white/5 relative group">
                {generatedImage ? (
                  <img
                    src={generatedImage}
                    alt="AI generated image"
                    className={`w-full h-full object-contain transition-all duration-500 ${isGenerating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <Wand2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
                      <p className="text-sm">Generated image will appear here</p>
                    </div>
                  </div>
                )}
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-3 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                      <span className="text-sm text-gray-400">Generating your image...</span>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                    <p className="text-red-400 text-sm text-center px-4">{error}</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </figure>
              {generatedImage && !isGenerating && (
                <>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                    <span className="text-sm text-gray-400">x @fal_ai</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 line-clamp-2">
                    {prompt.slice(0, 100)}...
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
