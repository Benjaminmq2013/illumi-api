
export const configureCors = ( app ) => {
    const config = {
        origin: "http://localhost:3000"
    }
    app.enableCors(config)
}