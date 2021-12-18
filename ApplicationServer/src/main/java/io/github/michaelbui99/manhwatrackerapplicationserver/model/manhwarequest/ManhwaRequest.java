package io.github.michaelbui99.manhwatrackerapplicationserver.model.manhwarequest;

import io.github.michaelbui99.manhwatrackerapplicationserver.model.moderator.Moderator;

public class ManhwaRequest {
    private int id;
    private RequestStatus status;
    private Moderator approvedBy;

    public ManhwaRequest(int id, RequestStatus status) {
        this.id = id;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public RequestStatus getStatus() {
        return status;
    }

    public void setStatus(RequestStatus status) {
        this.status = status;
    }

    public Moderator getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(Moderator approvedBy) {
        this.approvedBy = approvedBy;
    }
}
