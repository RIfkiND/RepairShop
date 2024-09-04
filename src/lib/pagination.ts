export function getPaginationParams(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    return { skip, take: pageSize };
  }
  