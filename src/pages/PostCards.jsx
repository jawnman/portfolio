import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';
import { postCards } from '../constants/postcards';

const PostCards = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="mb-12 border-b border-tech-muted/60 pb-6">
                    <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-tech-accent">
                        Post Cards
                    </h2>
                    <p className="text-tech-secondary mt-3">
                        Short moving loops from the pit — press nothing, just watch.
                    </p>
                </div>

                <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                    {postCards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                            className={card.orientation === 'horizontal' ? 'col-span-2' : ''}
                        >
                            <PostCard {...card} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PostCards;
