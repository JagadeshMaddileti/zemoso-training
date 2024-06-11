import heapq

def dijkstra(graph, source):
    dist = {node: float('inf') for node in graph}
    dist[source] = 0
    priority_queue = [(0, source)]
    prev = {node: None for node in graph}

    while priority_queue:
        current_dist, current_node = heapq.heappop(priority_queue)

        if current_dist > dist[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_dist + weight

            if distance < dist[neighbor]:
                dist[neighbor] = distance
                prev[neighbor] = current_node
                heapq.heappush(priority_queue, (distance, neighbor))

    return dist, prev

def shortest_path(graph, source, destination):
    dist, prev = dijkstra(graph, source)
    path = []
    u = destination

    while prev[u] is not None:
        path.insert(0, u)
        u = prev[u]
    
    if path:
        path.insert(0, source)
    
    return path, dist[destination]

graph = {
     'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 6},
    'C': {'A': 4, 'B': 2, 'D': 3},
    'D': {'B': 6, 'C': 3}
}
source = 'A'
destination = 'D'
path, cost = shortest_path(graph, source, destination)

print(f"The shortest path from {source} to {destination} is {path} with a cost of {cost}")