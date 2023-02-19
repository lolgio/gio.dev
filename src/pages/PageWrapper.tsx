import { Motion } from "@motionone/solid";

const PageWrapper = ({ children }) => {
    return (
        <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            class="min-h-[calc(100vh-8rem)] overflow-hidden"
        >
            {children}
        </Motion.div>
    );
};

export default PageWrapper;
