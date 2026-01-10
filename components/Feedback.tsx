import React, { useState, useEffect } from 'react';
import { Review, SentimentAnalysis } from '../types';
import { getReviews, addReview } from '../services/storageService';
import { analyzeReviews } from '../services/geminiService';

const Feedback: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysis, setAnalysis] = useState<SentimentAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay for realism
    setTimeout(() => {
      const newReview = addReview({
        customerName: formData.name,
        rating: formData.rating,
        comment: formData.comment
      });
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', rating: 5, comment: '' });
      setIsSubmitting(false);
    }, 600);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      if (reviews.length === 0) {
        throw new Error("No reviews to analyze yet!");
      }
      const result = await analyzeReviews(reviews);
      setAnalysis(result);
    } catch (err: any) {
        // Safe error handling if API key is missing or quota exceeded
        console.error(err);
        setError(err.message || "Failed to analyze reviews. Make sure API Key is set.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="reviews" className="py-20 bg-momo-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">Customer Love</h2>
          <p className="text-gray-400">See what our dumpling lovers have to say.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Review List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-2xl font-heading text-momo-gold uppercase">Latest Reviews</h3>
               <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`text-xs px-3 py-1 rounded border border-momo-orange text-momo-orange hover:bg-momo-orange hover:text-white transition-colors uppercase tracking-wider ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
               >
                 {isAnalyzing ? 'Analyzing...' : 'AI Sentiment Report'}
               </button>
            </div>
            
            {/* AI Analysis Result Panel */}
            {error && (
                <div className="bg-red-900/20 border border-red-800 p-4 rounded text-red-200 text-sm mb-4">
                    {error}
                </div>
            )}

            {analysis && (
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8 animate-fade-in-up">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-white font-heading">Gemini Analysis Report</h4>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${analysis.overallSentiment === 'Positive' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                        {analysis.overallSentiment}
                    </span>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                    <p><strong className="text-gray-400">Summary:</strong> {analysis.summary}</p>
                    <div>
                        <strong className="text-gray-400">Highlights:</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {analysis.highlightedDishes.map((d, i) => (
                                <span key={i} className="bg-gray-700 px-2 py-0.5 rounded text-xs text-momo-gold">{d}</span>
                            ))}
                        </div>
                    </div>
                    <p><strong className="text-gray-400">Feedback:</strong> {analysis.areasForImprovement}</p>
                </div>
              </div>
            )}

            <div className="h-[500px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {reviews.length === 0 ? (
                <p className="text-gray-500 italic text-center py-10">No reviews yet. Be the first!</p>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="bg-[#252525] p-6 rounded-lg border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-white text-lg">{review.customerName}</span>
                      <div className="flex text-momo-gold">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed italic">"{review.comment}"</p>
                    <p className="text-gray-600 text-xs mt-3 text-right">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-momo-orange p-8 rounded-xl shadow-2xl h-fit sticky top-24">
            <h3 className="text-2xl font-heading font-bold text-white mb-6 uppercase">Drop a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wide">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`text-2xl transition-transform hover:scale-110 focus:outline-none ${
                        star <= formData.rating ? 'text-white' : 'text-white/30'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2 uppercase tracking-wide">Comment</label>
                <textarea
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your Momo experience..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-black text-white font-heading font-bold uppercase tracking-widest rounded hover:bg-gray-900 transition-colors shadow-lg ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Posting...' : 'Submit Review'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;