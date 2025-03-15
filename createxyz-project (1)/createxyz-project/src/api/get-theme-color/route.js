async function handler() {
  const result = await sql`
    SELECT theme_color 
    FROM user_preferences 
    ORDER BY created_at DESC 
    LIMIT 1
  `;

  return {
    theme_color: result[0]?.theme_color || "#000000",
  };
}