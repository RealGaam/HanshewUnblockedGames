async function handler({ theme_color }) {
  const result = await sql`
    INSERT INTO user_preferences (theme_color)
    VALUES (${theme_color})
    ON CONFLICT (id) DO UPDATE
    SET theme_color = ${theme_color}
    RETURNING *
  `;

  return {
    theme_color: result[0].theme_color,
  };
}