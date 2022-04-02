import { buntstift } from "buntstift";
import { flaschenpost } from "flaschenpost";

const logger = flaschenpost.getLogger();

buntstift.header("Buntstift HEADER", { prefix: "🔥" });
buntstift.info("Buntstift INFO", { prefix: "❤️ " });
buntstift.error("Buntstift ERROR", { prefix: "💩" });
buntstift.warn("Buntstift WARN", { prefix: "⚡" });
buntstift.success("Buntstift SUCCESS", { prefix: "👍" });

buntstift.line();
buntstift.list("foo");
buntstift.list("bar");
buntstift.list("baz", { level: 1 });

buntstift.line();

logger.debug("Debug message");
logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message");
logger.fatal("Fatal message");
