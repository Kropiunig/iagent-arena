interface ParsedPrompt {
	systemContent: string;
	userContent: string;
}

/**
 * Parses a prompt string to extract system and user content
 * Format expected:
 * [SYSTEM]
 * System content here...
 * [/SYSTEM]
 *
 * [USER]
 * User content here...
 * [/USER]
 */
export function parsePrompt(
	prompt: string,
	defaultSystem?: string,
	defaultUser?: string,
): ParsedPrompt {
	const systemMatch = prompt.match(/\[SYSTEM\]([\s\S]*?)\[\/SYSTEM\]/);
	const userMatch = prompt.match(/\[USER\]([\s\S]*?)\[\/USER\]/);

	return {
		systemContent: (systemMatch ? systemMatch[1].trim() : defaultSystem) || "",
		userContent:
			(userMatch ? userMatch[1].trim() : defaultUser || prompt.trim()) || "",
	};
}

/**
 * Creates a formatted prompt string
 */
export function createPrompt(
	systemContent: string,
	userContent: string,
): string {
	return `[SYSTEM]
${systemContent}
[/SYSTEM]

[USER]
${userContent}
[/USER]`;
}
