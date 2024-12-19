# Responsive Home Page Assignment

This README file documents the work done for the class assignment where we were tasked with creating a fully responsive home page. The goal was to ensure the page layout adapts to various screen sizes, including small (`sm`), medium (`md`), large (`lg`), and extra-large (`xl`).

## Task Description
We were required to design a responsive home page with the following features:

1. **Small Screens (`sm`)**:
   - The layout should stack vertically.
   - The heading appears first, followed by the paragraph, button, and then the image.

2. **Medium Screens (`md`) and Larger**:
   - The layout switches to a two-column structure.
   - The heading, paragraph, and button align on the left.
   - The image appears on the right, properly aligned and justified.

## Technologies Used
- **Next.js**: For creating the React-based framework.
- **Tailwind CSS**: For responsive design and utility classes.
- **Image Component**: To handle the image with optimized loading.

## Implementation Details
The following components and styles were implemented:

1. **Responsive Layout**:
   - Used `flex` and `flex-col sm:flex-row` to switch between column and row layouts based on screen size.
   - Adjusted element orders with `order` classes (e.g., `sm:order-2`).

2. **Typography and Spacing**:
   - Adjusted text sizes and spacing with Tailwind classes like `text-[36px]` and `gap-4`.
   - Proper padding and margins ensured content was visually balanced on all screen sizes.

3. **Image Handling**:
   - Utilized the Next.js `Image` component for optimized image rendering.
   - Used `object-contain` for small screens and `object-cover` for larger screens to adapt the image size.

4. **Responsive Utilities**:
   - `sm`, `md`, `lg`, and `xl` breakpoints were utilized for screen-specific styles.
   - For example, `w-[250px] sm:w-auto` ensures proper scaling of images.

## Outcome
The final design meets the requirements for:

- Small screens: Elements stack vertically with proper spacing and alignment.
- Medium to extra-large screens: A two-column layout ensures a professional and balanced appearance.


## Conclusion
The assignment was successfully completed with a fully responsive layout. This home page adapts seamlessly to various screen sizes, meeting all specified requirements.

