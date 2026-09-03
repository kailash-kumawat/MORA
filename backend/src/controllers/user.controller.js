import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => !field || field.trim === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const createdUser = await userService.createUser({
    name,
    email,
    password,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "Signed-up successfully"));
});
