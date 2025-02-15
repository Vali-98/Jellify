import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: (1000 * 60 * 60 * 24) * 5, // 5 days, for maximum cache-age
            staleTime: (1000 * 60 * 10), // 10 minutes,
        }
    }
});