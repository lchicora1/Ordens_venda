export type AuditAction =
  | "ORDER_CREATED"
  | "STATUS_CHANGED"
  | "SCHEDULE_UPDATED"
  | "TRANSPORT_CHANGED"
  | "CUSTOMER_UPDATED"
  | "ITEM_UPDATED";

export type AuditEntity =
  | "SalesOrder"
  | "Customer"
  | "Transport"
  | "Schedule"
  | "Item";

export interface AuditEvent {
  action: AuditAction;
  entity: AuditEntity;
  entityId: string;
  previousState?: any;
  newState?: any;
  userId?: string;
}