// TemplateRegistry.ts

import { ClassicTemplate } from "../resume-templates/ClassicTemplate"
import { ModernTemplate } from "../resume-templates/ModernTemplate"

export const TEMPLATE_REGISTRY = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
}

export type TemplateKey = keyof typeof TEMPLATE_REGISTRY