resource "aws_ecr_repository" "repo" {
  name                 = "app_repository"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}
